/*
  # Create hero_leads table for hero section submissions

  1. New Tables
    - `hero_leads`
      - `id` (uuid, primary key)
      - `email` (text, unique, not null)
      - `company_name` (text, nullable)
      - `created_at` (timestamp with timezone)

  2. Security
    - Enable RLS on `hero_leads` table
    - Add policy for public insertion (no auth required)
    - Add policy for authenticated users to view all leads

  3. Notes
    - Separate table for hero section submissions
    - Email is unique to prevent duplicate submissions
    - Public can insert without authentication
*/

CREATE TABLE IF NOT EXISTS hero_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  company_name text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE hero_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert hero leads"
  ON hero_leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view hero leads"
  ON hero_leads
  FOR SELECT
  TO authenticated
  USING (true);
