interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',
  defaults: {
    from: {
      email: 'rodrigo@rodalladea.dev',
      name: 'Rodrigo Prado Dalla Dea',
    },
  },
} as IMailConfig;
