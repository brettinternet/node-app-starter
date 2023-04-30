import * as dotenv from 'dotenv'
import * as path from 'path'
import { z } from 'zod'

const { NODE_ENV = 'development', DEPLOYMENT_CONTEXT = 'development' } =
  process.env
export const isProd = NODE_ENV === 'production'
export const isProdDeployed = DEPLOYMENT_CONTEXT === 'production'

if (DEPLOYMENT_CONTEXT !== 'production') {
  const serverPackageRoot = path.resolve(__dirname, '..', '..')
  const projectRoot = path.resolve(serverPackageRoot, '..', '..')
  const projectEnv = path.resolve(projectRoot, '.env')
  dotenv.config({ path: projectEnv })
}

// validation
const EnvVars = z
  .object({
    nodeEnv: z.enum(['production', 'test', 'development']),
    deploymentContext: z.enum(['production', 'staging', 'test', 'development']),
    logLevel: z.enum(['error', 'warn', 'info', 'debug']),
    postgresHost: z.string(),
    postgresUser: z.string(),
    postgresPassword: z.string(),
    postgresPort: z.number(),
    port: z.number(),
  })
  .required()

const {
  LOG_LEVEL = 'debug',
  POSTGRES_HOST = 'localhost',
  POSTGRES_USER = 'app',
  POSTGRES_PASSWORD = 'postgres',
  POSTGRES_PORT: POSTGRES_PORT_STR,
  PORT: PORT_STR,
} = process.env

export const {
  deploymentContext,
  logLevel,
  port,
  postgresHost,
  postgresPort,
  postgresUser,
  postgresPassword,
} = EnvVars.parse({
  nodeEnv: NODE_ENV,
  deploymentContext: DEPLOYMENT_CONTEXT,
  logLevel: LOG_LEVEL,
  port: Number(PORT_STR) || 3001,
  postgresHost: POSTGRES_HOST,
  postgresPort: Number(POSTGRES_PORT_STR) || 5432,
  postgresUser: POSTGRES_USER,
  postgresPassword: POSTGRES_PASSWORD,
})
