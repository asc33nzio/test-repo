num LogEnum {
    'info' = '\x1b[32m',
    'error' = '\x1b[31m'
  }
  
  class Logger {
    private static logger: Logger | null = null;
    private reset = '\x1b[0m';
  
    private constructor() {}
  
    static getInstance() {
      if (!Logger.logger) Logger.logger = new Logger();
      return Logger.logger;
    }
    
    log(logType: LogEnum, messages: string | string[]) {
      if (Array.isArray(messages)) {
        messages.forEach((message) => {
          console.log(logType + message + this.reset);
        });
        return;
      }
      console.log(Date.now() + logType + messages + this.reset);
    }
  }
  
  function printHelloWorld() {
    const logger = Logger.getInstance();
    logger.log(LogEnum.info, 'Hello world!');
  }
  
  printHelloWorld();