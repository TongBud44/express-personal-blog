import * as pg from "pg";
const { Pool } = pg.default;

const pool = new Pool({
  connectionString:
    "postgresql://postgres:0981084841@localhost:5432/my-personal-blog-posts",
});

export default pool;
