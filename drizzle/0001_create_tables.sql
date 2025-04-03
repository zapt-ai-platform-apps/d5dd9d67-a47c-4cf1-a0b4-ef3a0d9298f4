CREATE TABLE IF NOT EXISTS "users" (
  "id" UUID PRIMARY KEY,
  "email" TEXT NOT NULL UNIQUE,
  "created_at" TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS "profiles" (
  "id" SERIAL PRIMARY KEY,
  "user_id" UUID NOT NULL REFERENCES users(id),
  "first_name" TEXT NOT NULL,
  "last_name" TEXT NOT NULL,
  "headline" TEXT,
  "bio" TEXT,
  "location" TEXT,
  "industry" TEXT,
  "profile_image" TEXT,
  "is_business_owner" BOOLEAN DEFAULT false,
  "is_looking_for_opportunities" BOOLEAN DEFAULT true,
  "is_open_to_networking" BOOLEAN DEFAULT true,
  "updated_at" TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS "connections" (
  "id" SERIAL PRIMARY KEY,
  "requester_id" UUID NOT NULL REFERENCES users(id),
  "addressee_id" UUID NOT NULL REFERENCES users(id),
  "status" TEXT NOT NULL CHECK (status IN ('pending', 'accepted', 'rejected')),
  "created_at" TIMESTAMP DEFAULT NOW(),
  "updated_at" TIMESTAMP DEFAULT NOW(),
  UNIQUE(requester_id, addressee_id)
);

CREATE TABLE IF NOT EXISTS "posts" (
  "id" SERIAL PRIMARY KEY,
  "user_id" UUID NOT NULL REFERENCES users(id),
  "content" TEXT NOT NULL,
  "image_url" TEXT,
  "created_at" TIMESTAMP DEFAULT NOW(),
  "updated_at" TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS "comments" (
  "id" SERIAL PRIMARY KEY,
  "post_id" INTEGER NOT NULL REFERENCES posts(id),
  "user_id" UUID NOT NULL REFERENCES users(id),
  "content" TEXT NOT NULL,
  "created_at" TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS "likes" (
  "id" SERIAL PRIMARY KEY,
  "post_id" INTEGER NOT NULL REFERENCES posts(id),
  "user_id" UUID NOT NULL REFERENCES users(id),
  "created_at" TIMESTAMP DEFAULT NOW(),
  UNIQUE(post_id, user_id)
);

CREATE TABLE IF NOT EXISTS "messages" (
  "id" SERIAL PRIMARY KEY,
  "sender_id" UUID NOT NULL REFERENCES users(id),
  "recipient_id" UUID NOT NULL REFERENCES users(id),
  "content" TEXT NOT NULL,
  "read" BOOLEAN DEFAULT false,
  "created_at" TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS "companies" (
  "id" SERIAL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "description" TEXT,
  "industry" TEXT,
  "size" TEXT,
  "location" TEXT,
  "website" TEXT,
  "logo_url" TEXT,
  "owner_id" UUID NOT NULL REFERENCES users(id),
  "created_at" TIMESTAMP DEFAULT NOW(),
  "updated_at" TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS "jobs" (
  "id" SERIAL PRIMARY KEY,
  "company_id" INTEGER NOT NULL REFERENCES companies(id),
  "title" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "location" TEXT,
  "job_type" TEXT CHECK (job_type IN ('full-time', 'part-time', 'contract', 'freelance', 'internship')),
  "salary_range" TEXT,
  "created_at" TIMESTAMP DEFAULT NOW(),
  "expires_at" TIMESTAMP,
  "is_active" BOOLEAN DEFAULT true
);