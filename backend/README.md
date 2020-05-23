# GoBarber

An app to the barbers.

## Technologies

For the application:

- [Express](https://expressjs.com/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [date-fns](https://date-fns.org/)
- [JWT](https://jwt.io/)
- [Multer](https://github.com/expressjs/multer)
- [TypeORM](https://typeorm.io/#/)

For code formatting:

- [Editor Config](https://editorconfig.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)


# Functionalities TODO

## Password Recovery

**RF**

- User should be able to recovery your password by telling your email;
- User should receive an email with instructions to recovery your password;
- User should be able to reset your password;

**RNF**

- Use Mailtrap to test;
- Use Amazon SES to send emails in production;
- Email's shipments should happen in background;

**RN**

- Link sent by email to reset password should expire in 2 hours;
- User need to confirm your new password to reset;

## Profile Update

**RF**

- User should be able to update your profile;

**RNF**

- Does not have.

**RN**

- User should not be able to change your email to an email already used;
- To update your password, user should tell your current password;
- To update your password, user should confirm your new password;

## Provider Panel

**RF**

- User should be able to list your appointments of a specific day;
- Provider should receive a notification every time that happen a new appointment;
- Provider should be able to see all notifications not readed;

**RNF**

- Provider's appointments should be storaged in cache;
- Provider's notifications should be storaged in MongoDB;
- Provider's notifications should be sent in real time using Socket.io;

**RN**

- Notification should have a state of read or non-read to provider controller that;

## Services Calendar

**RF**

- User should be able to list all providers registered;
- User should be able to list the days and a month with at least an appointment available;
- User should be able to list appointments available in a specific day of a provider;
- User should be able to do a new appointment with the provider;

**RNF**

- List of providers should be loaded in cache;

**RN**

- Each appointment should be exactly 1 hour;
- The appointments should be available between 8h to 18h;
- User could not make an appointment in a time with an appointment already maked;
- User could not make an appointment in a time which already gone;
- User could not make an appointment with yourself;
