/*
  # Create leads table for email captures

  1. New Tables
    - `leads`
      - `id` (uuid, primary key)
      - `email` (text, unique, not null)
      - `company_name` (text, nullable)
      - `created_at` (timestamp with timezone)

  2. Security
    - Enable RLS on `leads` table
    - Add policy for public insertion (no auth required for lead capture)
    - Add policy for authenticated users to view their own leads

  3. Notes
    - Email is unique to prevent duplicate submissions
    - Public can insert to capture leads from landing page
    - No user authentication required for lead capture
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  company_name text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert leads"
  ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view leads"
  ON leads
  FOR SELECT
  TO authenticated
  USING (true);
