import { Tags } from '@entities/Tags';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Tags)
class TagsRepository extends Repository<Tags> { }
export { TagsRepository };
