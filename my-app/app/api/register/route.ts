import connectMongoDB from "@/libs/mongo";
import USER from "@/model/user";
import { NextResponse } from "next/server";

connectMongoDB();
export const POST = async (req: Request, res: Response) => {
  try {
    const { name, email, password, role } = await req.json();
    console.log("req.body", name, password, role);
    const user = new USER({ name, email, password, role });
    await user.save();
    return NextResponse.json(
      { message: "admin register successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed create Admin" },
      { status: 500 }
    );
  }
};
