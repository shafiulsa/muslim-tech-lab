"use client";

import { useEffect } from 'react';

interface OscillatorConfig {
    phase?: number;
    offset?: number;
    frequency?: number;
    amplitude?: number;
}

interface EConfig {
    debug: boolean;
    friction: number;
    trails: number;
    size: number;
    dampening: number;
    tension: number;
}

interface Pos {
    x: number;
    y: number;
}

interface LineConfig {
    spring: number;
}

class Oscillator {
    phase: number;
    offset: number;
    frequency: number;
    amplitude: number;

    constructor(config: OscillatorConfig = {}) {
        this.phase = config.phase || 0;
        this.offset = config.offset || 0;
        this.frequency = config.frequency || 0.001;
        this.amplitude = config.amplitude || 1;
    }

    update() {
        this.phase += this.frequency;
        return this.offset + Math.sin(this.phase) * this.amplitude;
    }
}

class Node {
    x: number = 0;
    y: number = 0;
    vy: number = 0;
    vx: number = 0;
}

class Line {
    spring: number;
    friction: number;
    nodes: Node[];
    pos: Pos;
    ctx: CanvasRenderingContext2D;
    E: EConfig;

    constructor(config: LineConfig, pos: Pos, ctx: CanvasRenderingContext2D, E: EConfig) {
        this.spring = config.spring + 0.1 * Math.random() - 0.02;
        this.friction = E.friction + 0.01 * Math.random() - 0.002;
        this.nodes = [];
        for (let i = 0; i < E.size; i++) {
            const node = new Node();
            node.x = pos.x;
            node.y = pos.y;
            this.nodes.push(node);
        }
        this.pos = pos;
        this.ctx = ctx;
        this.E = E;
    }

    update() {
        let spring = this.spring;
        let node = this.nodes[0];
        node.vx += (this.pos.x - node.x) * spring;
        node.vy += (this.pos.y - node.y) * spring;

        for (let i = 0; i < this.nodes.length; i++) {
            node = this.nodes[i];
            if (i > 0) {
                const prevNode = this.nodes[i - 1];
                node.vx += (prevNode.x - node.x) * spring;
                node.vy += (prevNode.y - node.y) * spring;
                node.vx += prevNode.vx * this.E.dampening;
                node.vy += prevNode.vy * this.E.dampening;
            }
            node.vx *= this.friction;
            node.vy *= this.friction;
            node.x += node.vx;
            node.y += node.vy;
            spring *= this.E.tension;
        }
    }

    draw() {
        let n = this.nodes[0].x;
        let i = this.nodes[0].y;
        this.ctx.beginPath();
        this.ctx.moveTo(n, i);

        let a = 1;
        for (const o = this.nodes.length - 2; a < o; a++) {
            const e = this.nodes[a];
            const t = this.nodes[a + 1];
            n = 0.5 * (e.x + t.x);
            i = 0.5 * (e.y + t.y);
            this.ctx.quadraticCurveTo(e.x, e.y, n, i);
        }
        const lastNode = this.nodes[a];
        const secondLastNode = this.nodes[a + 1];
        this.ctx.quadraticCurveTo(lastNode.x, lastNode.y, secondLastNode.x, secondLastNode.y);
        this.ctx.stroke();
        this.ctx.closePath();
    }
}

const useCanvasCursor = () => {
    useEffect(() => {
        let ctx: (CanvasRenderingContext2D & { running?: boolean; frame?: number }) | null = null;
        let oscillator: Oscillator | null = null;
        const pos: Pos = { x: 0, y: 0 };
        let lines: Line[] = [];
        const E: EConfig = {
            debug: true,
            friction: 0.5,
            trails: 20,
            size: 50,
            dampening: 0.25,
            tension: 0.98,
        };

        function onEvent(e: MouseEvent | TouchEvent) {
            function initLines() {
                lines = [];
                for (let i = 0; i < E.trails; i++) {
                    lines.push(new Line({ spring: 0.4 + (i / E.trails) * 0.025 }, pos, ctx!, E));
                }
            }

            function updatePos(e: MouseEvent | TouchEvent) {
                if ('touches' in e) {
                    pos.x = e.touches[0].pageX;
                    pos.y = e.touches[0].pageY;
                } else {
                    pos.x = e.clientX;
                    pos.y = e.clientY;
                }
            }

            document.removeEventListener('mousemove', onEvent);
            document.removeEventListener('touchstart', onEvent);
            document.addEventListener('mousemove', updatePos);
            document.addEventListener('touchmove', updatePos);
            document.addEventListener('touchstart', (e) => {
                if (e.touches.length === 1) {
                    pos.x = e.touches[0].pageX;
                    pos.y = e.touches[0].pageY;
                }
            });

            updatePos(e);
            initLines();
            render();
        }

        function render() {
            if (ctx && ctx.running && oscillator) {
                ctx.globalCompositeOperation = 'source-over';
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                ctx.globalCompositeOperation = 'lighter';
                ctx.strokeStyle = `hsla(${Math.round(oscillator.update())},50%,50%,0.2)`;
                ctx.lineWidth = 1;
                for (let i = 0; i < E.trails; i++) {
                    lines[i].update();
                    lines[i].draw();
                }
                if (ctx.frame !== undefined) ctx.frame++;
                window.requestAnimationFrame(render);
            }
        }

        function resizeCanvas() {
            if (ctx && ctx.canvas) {
                ctx.canvas.width = window.innerWidth;
                ctx.canvas.height = window.innerHeight;
            }
        }

        const renderCanvas = () => {
            const canvas = document.getElementById('canvas') as HTMLCanvasElement;
            if (!canvas) return;
            ctx = canvas.getContext('2d') as (CanvasRenderingContext2D & { running?: boolean; frame?: number });
            if (!ctx) return;
            ctx.running = true;
            ctx.frame = 1;
            oscillator = new Oscillator({
                phase: Math.random() * 2 * Math.PI,
                amplitude: 85,
                frequency: 0.0015,
                offset: 285,
            });
            document.addEventListener('mousemove', onEvent);
            document.addEventListener('touchstart', onEvent);
            window.addEventListener('orientationchange', resizeCanvas);
            window.addEventListener('resize', resizeCanvas);

            const handleFocus = () => {
                if (ctx && !ctx.running) {
                    ctx.running = true;
                    render();
                }
            };
            const handleBlur = () => {
                if (ctx) ctx.running = true;
            };

            window.addEventListener('focus', handleFocus);
            window.addEventListener('blur', handleBlur);
            resizeCanvas();
        };

        renderCanvas();

        return () => {
            if (ctx) ctx.running = false;
            document.removeEventListener('mousemove', onEvent);
            document.removeEventListener('touchstart', onEvent);
            window.removeEventListener('orientationchange', resizeCanvas);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);
};

export default useCanvasCursor;
