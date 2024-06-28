import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ResponseFormat } from 'src/common/response.util';
export declare class ItemsController {
    private readonly itemsService;
    constructor(itemsService: ItemsService);
    create(createItemDto: CreateItemDto): Promise<ResponseFormat>;
    findAll(): Promise<ResponseFormat>;
    findOne(id: string): Promise<import("../../schema/item.schema").Item>;
    update(id: string, updateItemDto: UpdateItemDto): Promise<import("../../schema/item.schema").Item>;
}
