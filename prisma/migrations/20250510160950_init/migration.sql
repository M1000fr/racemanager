-- CreateTable
CREATE TABLE "SimulatorAccount" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "discordId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "SimulatorAccount_name_key" ON "SimulatorAccount"("name");

-- CreateIndex
CREATE UNIQUE INDEX "SimulatorAccount_discordId_key" ON "SimulatorAccount"("discordId");
