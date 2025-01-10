import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiBody } from '@nestjs/swagger';
import { CreateMahasiswaDTO} from './dto/create-mahasiswa.dto'
import { RegisterUserDTO } from './dto/register-user.dto';



@Controller()
export class AppController {

 

  constructor(private readonly appService: AppService) {}

  @Post("register")
  @ApiBody({type : RegisterUserDTO})
  register(@Body() user : RegisterUserDTO) {
    return this.appService.register(user)
 }


  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("mahasiswa")
  getMahasiswa() {
    return this.appService.getMahasiswa();
  }

  @Get("mahasiswa/:nim")
  getMahasiswaByNim(@Param("nim") nim : string) {
    return this.appService.getMahasiswByNim(nim)
  }

  @Post("mahasiswa")
  @ApiBody({type : CreateMahasiswaDTO})
  createMahasiswa( @Body() data : CreateMahasiswaDTO ) {
    return this.appService.addMahasiswa(data)
  }

  @Delete("mahasiswa/:nim")
  deleteMahasiswa( @Param("nim") nim : string ) {
    return this.appService.menghapusMahasiswa(nim)
  }
  
  @Put("mahasiswa/:nim")
  @ApiBody({type : CreateMahasiswaDTO})
  updateMahasiswa( @Param("nim") nim : string, @Body() data : CreateMahasiswaDTO ) {
    return this.appService.updateMahasiswa(nim, data)
  }
 

}