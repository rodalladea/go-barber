import AppError from '@shared/errors/AppError';

import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let createAppointment: CreateAppointmentService;

describe('CreateAppointment', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to create a new appointment', async () => {
    const appointment = await createAppointment.execute({
      date: new Date(),
      user_id: '1651684651',
      provider_id: '1651684651',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('1651684651');
  });

  it('should not be able to create two appointment at the same time', async () => {
    const appointmentDate = new Date();

    await createAppointment.execute({
      date: appointmentDate,
      user_id: '1651684651',
      provider_id: '1651684651',
    });

    await expect(
      createAppointment.execute({
        date: appointmentDate,
        user_id: '1651684651',
        provider_id: '1651684651',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
