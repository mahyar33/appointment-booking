import { Controller, Get, Post, Param, Query, Body } from '@nestjs/common';
import { SlotsService } from './slots.service';
import { SlotsGetDto } from './dto/slots.get.dto';
import { SlotsCreateDto } from './dto/slots.create.dto';

@Controller('slots')
export class SlotsController {
  constructor(private readonly slotsService: SlotsService) {}

  @Get()
  async getAvailableSlots(@Query() query: SlotsGetDto) {
    return this.slotsService.getAvailableSlots(query.date);
  }

  @Post(':id/book')
  async bookSlot(
    @Param('id') id: number,
    @Body() SlotsCreateDto: SlotsCreateDto,
  ) {
    return this.slotsService.bookSlot(id, SlotsCreateDto.name);
  }
}
