import "dotenv/config";
import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const key =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

if (!url || !key) {
  console.error(
    "缺少 Supabase 配置，请设置环境变量: NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY"
  );
  process.exit(1);
}

const supabase = createClient(url, key);

async function testSupabase() {
  const { data, error } = await supabase.from("poems").select("*").limit(1);
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("连接成功，示例数据:", data);
  }
}

void testSupabase();
