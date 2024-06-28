import { Model } from 'mongoose';
import { Item, ItemDocument } from '../../schema/item.schema';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
export declare class ItemsService {
    private itemModel;
    constructor(itemModel: Model<ItemDocument>);
    create(createItemDto: CreateItemDto): Promise<Item>;
    findAll(): Promise<Item[]>;
    findOne(id: string): Promise<Item>;
    update(id: string, updateItemDto: UpdateItemDto): Promise<Item>;
}
