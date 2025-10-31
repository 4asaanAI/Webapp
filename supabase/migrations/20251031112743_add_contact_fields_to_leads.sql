/*
  # Add contact form fields to leads table

  1. Changes
    - Add `name` column (text, nullable for backward compatibility)
    - Add `phone` column (text, nullable)
    - Add `query` column (text, nullable)

  2. Notes
    - All new fields are nullable to maintain compatibility with existing hero form submissions
    - The table now supports both simple email capture and full contact form submissions
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'leads' AND column_name = 'name'
  ) THEN
    ALTER TABLE leads ADD COLUMN name text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'leads' AND column_name = 'phone'
  ) THEN
    ALTER TABLE leads ADD COLUMN phone text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'leads' AND column_name = 'query'
  ) THEN
    ALTER TABLE leads ADD COLUMN query text;
  END IF;
END $$;
