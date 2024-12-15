import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
import { Slot } from './slots.entity';

@Injectable()
export class SlotsService {
  constructor(
    @InjectRepository(Slot)
    private readonly slotRepository: Repository<Slot>,
  ) {}

  async getAvailableSlots(date: string): Promise<Slot[]> {
    const startDate = new Date(date);
    const endDate = new Date(startDate);
    endDate.setUTCDate(endDate.getUTCDate() + 1);
    return this.slotRepository.find({
      where: { start_date: Between(startDate, endDate) },
      order: { id: 'ASC' },
    });
  }

  async bookSlot(id: number, name: string): Promise<Slot> {
    const slot = await this.slotRepository.findOneBy({ id });

    if (!slot) {
      throw new NotFoundException('Slot not found');
    }
    if (slot.booked) {
      throw new BadRequestException('Slot already booked');
    }

    slot.booked = true;
    slot.booked_by = name;

    return this.slotRepository.save(slot);
  }
}
