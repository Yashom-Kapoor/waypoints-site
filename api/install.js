import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv()

export default async function handler(req, res) {
    const userAgent = req.headers["user-agent"] || "";

    // Only count curl installs (with curl user-agent header)
    if (userAgent.includes("curl")) {
        await redis.incr("installs");
    }

    res.setHeader("Content-Type", "text/plain");

    res.send(`#!/bin/bash
set -e

curl -sSL https://raw.githubusercontent.com/Yashom-Kapoor/Waypoints-CLI/main/install.sh | bash
`)
}
