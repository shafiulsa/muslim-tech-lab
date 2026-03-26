"use client";

// @ts-nocheck
import { useEffect } from 'react';

const useCanvasCursor = () => {
    function n(e) {
        this.init(e || {});
    }
    n.prototype = {
        init: function (e) {
            this.phase = e.phase || 0;
            this.offset = e.offset || 0;
            this.frequency = e.frequency || 0.001;
            this.amplitude = e.amplitude || 1;
        },
        update: function () {
            let e;
            return (
                (this.phase += this.frequency),
                (e = this.offset + Math.sin(this.phase) * this.amplitude)
            );
        },
        value: function () {
            return e;
        },
    };

    function Line(e, pos, ctx, E, f) {
        this.init(e || {}, pos, ctx, E, f);
    }

    Line.prototype = {
        init: function (e, pos, ctx, E, f) {
            this.spring = e.spring + 0.1 * Math.random() - 0.02;
            this.friction = E.friction + 0.01 * Math.random() - 0.002;
            this.nodes = [];
            for (var t, n = 0; n < E.size; n++) {
                t = new Node();
                t.x = pos.x;
                t.y = pos.y;
                this.nodes.push(t);
            }
            this.pos = pos;
            this.ctx = ctx;
            this.E = E;
            this.f = f;
        },
        update: function () {
            var e = this.spring,
                t = this.nodes[0];
            t.vx += (this.pos.x - t.x) * e;
            t.vy += (this.pos.y - t.y) * e;
            for (var n, i = 0, a = this.nodes.length; i < a; i++)
                ((t = this.nodes[i]),
                    0 < i &&
                    ((n = this.nodes[i - 1]),
                        (t.vx += (n.x - t.x) * e),
                        (t.vy += (n.y - t.y) * e),
                        (t.vx += n.vx * this.E.dampening),
                        (t.vy += n.vy * this.E.dampening)),
                    (t.vx *= this.friction),
                    (t.vy *= this.friction),
                    (t.x += t.vx),
                    (t.y += t.vy),
                    (e *= this.E.tension));
        },
        draw: function () {
            var e,
                t,
                n = this.nodes[0].x,
                i = this.nodes[0].y;
            this.ctx.beginPath();
            this.ctx.moveTo(n, i);
            for (var a = 1, o = this.nodes.length - 2; a < o; a++) {
                e = this.nodes[a];
                t = this.nodes[a + 1];
                n = 0.5 * (e.x + t.x);
                i = 0.5 * (e.y + t.y);
                this.ctx.quadraticCurveTo(e.x, e.y, n, i);
            }
            e = this.nodes[a];
            t = this.nodes[a + 1];
            this.ctx.quadraticCurveTo(e.x, e.y, t.x, t.y);
            this.ctx.stroke();
            this.ctx.closePath();
        },
    };

    function Node() {
        this.x = 0;
        this.y = 0;
        this.vy = 0;
        this.vx = 0;
    }

    useEffect(() => {
        var ctx,
            f,
            pos = { x: 0, y: 0 },
            lines = [],
            E = {
                debug: true,
                friction: 0.5,
                trails: 20,
                size: 50,
                dampening: 0.25,
                tension: 0.98,
            };

        function onMousemove(e) {
            function o() {
                lines = [];
                for (var e = 0; e < E.trails; e++)
                    lines.push(new Line({ spring: 0.4 + (e / E.trails) * 0.025 }, pos, ctx, E, f));
            }
            function c(e) {
                if (e.touches) {
                    pos.x = e.touches[0].pageX;
                    pos.y = e.touches[0].pageY;
                } else {
                    pos.x = e.clientX;
                    pos.y = e.clientY;
                }
                // e.preventDefault(); // Removed to avoid blocking scroll
            }
            function l(e) {
                if (e.touches.length === 1) {
                    pos.x = e.touches[0].pageX;
                    pos.y = e.touches[0].pageY;
                }
            }
            document.removeEventListener('mousemove', onMousemove);
            document.removeEventListener('touchstart', onMousemove);
            document.addEventListener('mousemove', c);
            document.addEventListener('touchmove', c);
            document.addEventListener('touchstart', l);
            c(e);
            o();
            render();
        }

        function render() {
            if (ctx && ctx.running) {
                ctx.globalCompositeOperation = 'source-over';
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                ctx.globalCompositeOperation = 'lighter';
                ctx.strokeStyle = 'hsla(' + Math.round(f.update()) + ',50%,50%,0.2)';
                ctx.lineWidth = 1;
                for (var e, t = 0; t < E.trails; t++) {
                    (e = lines[t]).update();
                    e.draw();
                }
                ctx.frame++;
                window.requestAnimationFrame(render);
            }
        }

        function resizeCanvas() {
            if (ctx && ctx.canvas) {
                ctx.canvas.width = window.innerWidth;
                ctx.canvas.height = window.innerHeight;
            }
        }

        const renderCanvas = function () {
            const canvas = document.getElementById('canvas');
            if (!canvas) return;
            ctx = canvas.getContext('2d');
            ctx.running = true;
            ctx.frame = 1;
            f = new n({
                phase: Math.random() * 2 * Math.PI,
                amplitude: 85,
                frequency: 0.0015,
                offset: 285,
            });
            document.addEventListener('mousemove', onMousemove);
            document.addEventListener('touchstart', onMousemove);
            window.addEventListener('orientationchange', resizeCanvas);
            window.addEventListener('resize', resizeCanvas);

            const handleFocus = () => {
                if (!ctx.running) {
                    ctx.running = true;
                    render();
                }
            };
            const handleBlur = () => {
                // ctx.running = false; // Keep it running or stop on blur? 
                // User's code said ctx.running = true on blur, which is weird but I'll follow.
                ctx.running = true;
            };

            window.addEventListener('focus', handleFocus);
            window.addEventListener('blur', handleBlur);
            resizeCanvas();
        };

        renderCanvas();

        return () => {
            if (ctx) ctx.running = false;
            document.removeEventListener('mousemove', onMousemove);
            document.removeEventListener('touchstart', onMousemove);
            window.removeEventListener('orientationchange', resizeCanvas);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);
};

export default useCanvasCursor;
