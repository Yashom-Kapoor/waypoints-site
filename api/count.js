import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export default async function handler(req, res) {
    const installs = await redis.get("installs");

    try {
        const installs = await redis.get("installs");

        res.status(200).json({
        installs: installs || 0
        });
    } catch (err) {
        console.error(err);

        res.status(500).json({
            error: "Failed to fetch installs"
        });
    }
}