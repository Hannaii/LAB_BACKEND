import { ApiProperty } from "@nestjs/swagger";
import { IsString, Matches, Length, IsNotEmpty } from "class-validator";
export class RegisterUserDTO {
    @ApiProperty({
        description: "UserName",
        type: String,
        example: "Hanna Maryam"
    })
    @IsString()
    @IsNotEmpty()
    @Matches(/^\S*$/i)
    @Length(1, 30)
    username: string;
    @ApiProperty({
        description: "Password",
        type: String,
        example: "Hanna"
    })
    @IsString()
    @IsNotEmpty()
    @Matches(/^\S*$/i)
    @Length(1, 30)
    password: string;
}
