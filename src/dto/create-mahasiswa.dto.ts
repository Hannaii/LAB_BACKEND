import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Jenis_kelamin } from "@prisma/client";
import { IsEnum, IsNotEmpty, IsOptional, IsString, Length } from "class-validator";

export class CreateMahasiswaDTO {

    @ApiProperty({ description: "NIM", type: String, example: "105841110922" })
    @IsString({ message: "NIM Harus Bertipe String" })
    @IsNotEmpty({ message: "Tidak Boleh Kosong" })
    @Length(1, 12, { message: "Hanya bisa sampai 12 karakter" })
    nim: string;

    @ApiProperty({ description: "Nama", type: String, example: "Hanna Maryam" })
    @IsString({ message: "Nama Harus Bertipe String" })
    @IsNotEmpty({ message: "Tidak Boleh Kosong" })
    @Length(1, 50, { message: "Hanya bisa sampai 12 karakter" })
    nama: string;

    @ApiProperty({ description: "kelas", type: String, example: "5C" })
    @IsString({ message: "Kelas Harus Bertipe String" })
    @IsNotEmpty({ message: "Tidak Boleh Kosong" })
    @Length(1, 2, { message: "Hanya bisa sampai 2 karakter" })
    kelas: string;

    @ApiProperty({ description: "jurusan", type: String, example: "informatika" })
    @IsString({ message: "jurusan Harus Bertipe String" })
    @IsNotEmpty({ message: "Tidak Boleh Kosong" })
    @Length(1, 20, { message: "Hanya bisa sampai 20 karakter" })
    jurusan: string;

    @ApiProperty({
        enum: Jenis_kelamin,
        description: "Jenis kelamin (L/P)",
    })
    @IsEnum(Jenis_kelamin, {
        message: "Jenis Kelamin Hanya bernilai L atau P"
    })
    jenis_kelamin: Jenis_kelamin;
}
