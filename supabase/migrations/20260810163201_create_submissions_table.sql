/*
# Create submissions table for contact & registration forms

1. New Tables
- `submissions`
  - `id` (uuid, primary key)
  - `type` (text: 'contact' or 'rejoindre' — which form was submitted)
  - `first_name` (text, nullable — used in rejoindre form)
  - `last_name` (text, nullable — used in rejoindre form)
  - `name` (text, nullable — used in contact form, full name)
  - `email` (text, not null — submitter's email)
  - `phone` (text, nullable — submitter's phone)
  - `service` (text, nullable — requested service: repetition, cours-en-ligne, prepa-concours)
  - `level` (text, nullable — study level)
  - `subject` (text, nullable — contact subject)
  - `message` (text, nullable — message body)
  - `status` (text, default 'pending' — processing status)
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `submissions`.
- This is a no-auth app (no sign-in screen). Allow anon + authenticated INSERT only.
- SELECT/UPDATE/DELETE restricted to authenticated (admin only) — anon can only insert.
- This prevents public users from reading or modifying other people's submissions.
*/

CREATE TABLE IF NOT EXISTS submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  type text NOT NULL DEFAULT 'contact',
  first_name text,
  last_name text,
  name text,
  email text NOT NULL,
  phone text,
  service text,
  level text,
  subject text,
  message text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_submissions" ON submissions;
CREATE POLICY "anon_insert_submissions"
ON submissions FOR INSERT
TO anon, authenticated
WITH CHECK (true);

DROP POLICY IF EXISTS "authenticated_select_submissions" ON submissions;
CREATE POLICY "authenticated_select_submissions"
ON submissions FOR SELECT
TO authenticated
USING (true);

DROP POLICY IF EXISTS "authenticated_update_submissions" ON submissions;
CREATE POLICY "authenticated_update_submissions"
ON submissions FOR UPDATE
TO authenticated
USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "authenticated_delete_submissions" ON submissions;
CREATE POLICY "authenticated_delete_submissions"
ON submissions FOR DELETE
TO authenticated
USING (true);

CREATE INDEX IF NOT EXISTS idx_submissions_created_at ON submissions (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_submissions_type ON submissions (type);
CREATE INDEX IF NOT EXISTS idx_submissions_email ON submissions (email);
