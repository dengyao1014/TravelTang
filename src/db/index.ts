import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

export function db() {
  let databaseUrl = process.env.DATABASE_URL;
  console.log('==================== DATABASE CONNECTION INFO ====================');
  console.log('Database URL:', databaseUrl);
  console.log('Process ENV DATABASE_URL:', process.env.DATABASE_URL);
  console.log('==============================================================');

  if (!databaseUrl) {
    console.error('❌ DATABASE_URL is missing! Available environment variables:');
    // 只打印关键的环境变量名称
    console.error('Environment variables:', Object.keys(process.env).filter(key => key.includes('DATABASE') || key.includes('SUPABASE')));
    throw new Error("DATABASE_URL is not set");
  }

  // Database instance for Node.js environment
  let dbInstance: ReturnType<typeof drizzle> | null = null;

  // Node.js environment with connection pool configuration
  const client = postgres(databaseUrl, {
    prepare: false,
    max: 10, // Maximum connections in pool
    idle_timeout: 30, // Idle connection timeout (seconds)
    connect_timeout: 10, // Connection timeout (seconds)
  });
  dbInstance = drizzle({ client });

  return dbInstance;
}
