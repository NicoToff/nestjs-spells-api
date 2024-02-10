import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { HydratedDocument } from "mongoose";

@Schema({ versionKey: false })
export class TalentFeat {
  @ApiProperty({ enum: ["talent", "feat"], required: true })
  @Prop({ required: true })
  type: "talent" | "feat";

  @ApiProperty({ required: true })
  @Prop({ required: true, unique: true, trim: true })
  name: string;

  @ApiProperty()
  @Prop({ required: false, default: 1 })
  minLevel?: number;

  @ApiProperty({ isArray: true, type: String, required: false })
  @Prop({ required: false })
  prerequisites?: string[];

  @ApiProperty({ required: false })
  @Prop({ required: false })
  flavor?: string;

  @ApiProperty({ isArray: true, type: String, required: true })
  @Prop({ required: true })
  description: [string, ...string[]];

  // Hidden field from API
  @Prop({ required: false, default: false })
  isPrivate?: boolean;

  // @ApiProperty({ enum: SPELL_TAGS, isArray: true, required: false })
  // @Prop({ required: false })
  // tags?: SpellTag[];
}

export type TalentFeatDocument = HydratedDocument<TalentFeat>;

export const TalentFeatSchema = SchemaFactory.createForClass(TalentFeat);
