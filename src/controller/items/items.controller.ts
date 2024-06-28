
import { Controller, Get, Post, Body, Put, Param, Delete , HttpException, HttpStatus} from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { successResponse, errorResponse ,ResponseFormat } from 'src/common/response.util';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  async create(@Body() createItemDto: CreateItemDto): Promise<ResponseFormat> {
    try {
      const item = await this.itemsService.create(createItemDto);
      return successResponse(item);
    } catch (error) {
      throw new HttpException(errorResponse('Failed to create item', error), HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  async findAll(): Promise<ResponseFormat> {
    try {
      const findData = await this.itemsService.findAll()
      return successResponse(findData);
    } catch (error) {
      throw new HttpException(errorResponse('Failed to find item', error), HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
    return this.itemsService.update(id, updateItemDto);
  }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.itemsService.remove(id);
//   }
}
