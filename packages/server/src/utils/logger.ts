import { addColors, createLogger, format, transports } from 'winston'

import { isProd, logLevel as level } from 'utils/config'

export type LEVEL = 'error' | 'warn' | 'info' | 'debug'

const config = {
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    debug: 3,
  },
  colors: {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    debug: 'blue',
  },
} as const

const loggerTransports = {
  console: new transports.Console({ level }),
  file: new transports.File({ filename: 'exceptions.log' }),
}

export const logger = createLogger({
  levels: config.levels,
  format: format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [loggerTransports.console],
})
addColors(config.colors)

if (!isProd) {
  loggerTransports.console.format = format.combine(
    format.colorize(),
    format.simple()
  )
  logger.exceptions.handle(loggerTransports.file)
}
