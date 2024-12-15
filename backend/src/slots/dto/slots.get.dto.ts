import { IsNotEmpty, IsISO8601 } from 'class-validator';
import { IsValidDate } from 'src/validators/isValidDate';

export class SlotsGetDto {
  @IsNotEmpty()
  @IsISO8601({ strict: true })
  @IsValidDate({
    message:
      'Invalid date format. Use ISO 8601 format (e.g., 2024-05-01T09:00:00Z).',
  })
  date: string;
}
