import { pgTable, serial, text, timestamp, uuid, boolean, integer, uniqueIndex } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: uuid('id').primaryKey(),
  email: text('email').notNull().unique(),
  createdAt: timestamp('created_at').defaultNow()
});

export const profiles = pgTable('profiles', {
  id: serial('id').primaryKey(),
  userId: uuid('user_id').notNull().references(() => users.id),
  firstName: text('first_name').notNull(),
  lastName: text('last_name').notNull(),
  headline: text('headline'),
  bio: text('bio'),
  location: text('location'),
  industry: text('industry'),
  profileImage: text('profile_image'),
  isBusinessOwner: boolean('is_business_owner').default(false),
  isLookingForOpportunities: boolean('is_looking_for_opportunities').default(true),
  isOpenToNetworking: boolean('is_open_to_networking').default(true),
  updatedAt: timestamp('updated_at').defaultNow()
});

export const connections = pgTable('connections', {
  id: serial('id').primaryKey(),
  requesterId: uuid('requester_id').notNull().references(() => users.id),
  addresseeId: uuid('addressee_id').notNull().references(() => users.id),
  status: text('status').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow()
}, (table) => {
  return {
    unq: uniqueIndex('requester_addressee_unique').on(table.requesterId, table.addresseeId)
  };
});

export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  userId: uuid('user_id').notNull().references(() => users.id),
  content: text('content').notNull(),
  imageUrl: text('image_url'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow()
});

export const comments = pgTable('comments', {
  id: serial('id').primaryKey(),
  postId: integer('post_id').notNull().references(() => posts.id),
  userId: uuid('user_id').notNull().references(() => users.id),
  content: text('content').notNull(),
  createdAt: timestamp('created_at').defaultNow()
});

export const likes = pgTable('likes', {
  id: serial('id').primaryKey(),
  postId: integer('post_id').notNull().references(() => posts.id),
  userId: uuid('user_id').notNull().references(() => users.id),
  createdAt: timestamp('created_at').defaultNow()
}, (table) => {
  return {
    unq: uniqueIndex('post_user_unique').on(table.postId, table.userId)
  };
});

export const messages = pgTable('messages', {
  id: serial('id').primaryKey(),
  senderId: uuid('sender_id').notNull().references(() => users.id),
  recipientId: uuid('recipient_id').notNull().references(() => users.id),
  content: text('content').notNull(),
  read: boolean('read').default(false),
  createdAt: timestamp('created_at').defaultNow()
});

export const companies = pgTable('companies', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description'),
  industry: text('industry'),
  size: text('size'),
  location: text('location'),
  website: text('website'),
  logoUrl: text('logo_url'),
  ownerId: uuid('owner_id').notNull().references(() => users.id),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow()
});

export const jobs = pgTable('jobs', {
  id: serial('id').primaryKey(),
  companyId: integer('company_id').notNull().references(() => companies.id),
  title: text('title').notNull(),
  description: text('description').notNull(),
  location: text('location'),
  jobType: text('job_type'),
  salaryRange: text('salary_range'),
  createdAt: timestamp('created_at').defaultNow(),
  expiresAt: timestamp('expires_at'),
  isActive: boolean('is_active').default(true)
});