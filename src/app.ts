export const app = require('fastify')()

model User {
  id        String   @unique @default(uuid())
  username  String   @unique
  email     String   @unique
  password  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  jobs      Job[]

  @@map("user")
}

model Job {
  id          String        @unique @default(uuid())
  name        String
  description String
  createdAt   DateTime      @default(now())
  updatedAt   DateTime      @updatedAt
  user        User?         @relation(fields: [userId], references: [id])
  userId      String
  application Application[]

  @@map("job")
}

model Application {
  id            String   @unique @default(uuid())
  name          String
  email         String
  createdAt     DateTime @default(now())
  job           Job?     @relation(fields: [applicationId], references: [id])
  updatedAt     DateTime @updatedAt
  applicationId String

  @@map("application")
}
