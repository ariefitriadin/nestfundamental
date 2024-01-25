import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  HttpStatus,
  HttpCode,
  Res,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { OrderingService } from './ordering.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('ordering')
export class OrderingController {
  constructor(private readonly orderService: OrderingService) {}
  @Get()
  findAll(@Query() paginationQuery) {
    // const { limit, offset } = paginationQuery;

    return this.orderService.findAll();

    // response
    //   .status(200)
    //   .send(`Get All new order, limit: ${limit}, offset: ${offset}`);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, updateOrderDto: UpdateOrderDto) {
    return this.orderService.update(id, updateOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderService.remove(id);
  }
}
