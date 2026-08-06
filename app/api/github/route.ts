import { NextResponse } from "next/server";

import { getGithubProfile } from "@/lib/github";

export async function GET() {
  try {
    const profile = await getGithubProfile();

    return NextResponse.json(profile);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Unable to fetch GitHub profile.",
      },
      {
        status: 500,
      }
    );
  }
}
