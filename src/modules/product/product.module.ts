import { Module } from '@nestjs/common';
import { ProductService } from './services/product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { Product } from './entities/product.entity';
import { Option } from './entities/option.entity';
import { OptionValue } from './entities/option-values.entity';
import { ProductSku } from './entities/product-sku.entity';
import { SkuValue } from './entities/sku-value.entity';
import { AuthModule } from '../auth/auth.module';
import { RbacModule } from '../rbac/rbac.module';
import { OptionRepository, OptionValueRepository, ProductRepository, ProductSkuRepository, SkuValueRepository } from './repositories';
import { JwtModule } from '../jwt/jwt.module';


@Module({
  providers: [
    ProductService,
    ProductRepository,
    OptionRepository,
    OptionValueRepository,
    ProductSkuRepository,
    SkuValueRepository
  ],
  controllers: [ProductController],
  imports: [TypeOrmModule.forFeature([User, Product, Option, OptionValue, ProductSku, SkuValue]), AuthModule, RbacModule, JwtModule]
})
export class ProductModule {}
