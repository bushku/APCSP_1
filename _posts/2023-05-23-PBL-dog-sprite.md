---
title: Dog Sprite
layout: base
description: A Binary Math illustrative application using HTML, Liquid, and JavaScript.
permalink: /dog/sprite
categories: [week 35]
---

<html>
<head>
    <title>Dog Animation</title>
    <style>
        #canvas {
            border: 1px solid black;
        }
    </style>
</head>
<body>
    <canvas id="canvas" width="800" height="600"></canvas>
    <script>
        // Define the animation sequence
        var animationSequence = [
            { x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 2, y: 0 },
            { x: 3, y: 0 },
            { x: 4, y: 0 }
        ];
        // Load the sprite sheet image
        var spriteSheet = new Image();
        spriteSheet.src = "Dog Animation.png";
        // Define frame dimensions
        var frameWidth = 64;
        var frameHeight = 64;
        // Set up the canvas
        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");
        // Current frame index
        var currentFrame = 0;
        // Function to update the animation
        function update() {
            currentFrame = (currentFrame + 1) % animationSequence.length;
        }
        // Function to draw the current frame
        function draw() {
            var frame = animationSequence[currentFrame];
            var frameX = frame.x * frameWidth;
            var frameY = frame.y * frameHeight;
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(spriteSheet, frameX, frameY, frameWidth, frameHeight, 0, 0, frameWidth, frameHeight);
        }
        // Main animation loop
        function animate() {
            update();
            draw();
            requestAnimationFrame(animate);
        }
        // Start the animation loop
        animate();
    </script>
</body>
</html>
