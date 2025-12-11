import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ActivitiesService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.activity.findMany({
      orderBy: { date: 'desc' },
    });
  }

  async seed() {
    // Create a parent user if not exists
    const email = 'parent@test.com';
    let user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) {
      user = await this.prisma.user.create({
        data: {
          email,
          mobile: '1234567890',
          name: 'Demo Parent',
          password: 'password123',
          role: 'PARENT',
        },
      });
    }

    // Create some activities
    const count = await this.prisma.activity.count();
    if (count === 0) {
      await this.prisma.activity.createMany({
        data: [
          {
            title: 'Finger Painting',
            description:
              'Kids learned colors and textures using finger paints.',
            classType: 'Art',
            date: new Date(),
          },
          {
            title: 'Counting Games',
            description: 'Fun counting exercises using blocks.',
            classType: 'Math',
            date: new Date(Date.now() - 86400000), // Yesterday
          },
          {
            title: 'Story Time',
            description: 'Reading "The Very Hungry Caterpillar".',
            classType: 'Reading',
            date: new Date(Date.now() - 172800000), // 2 days ago
          },
        ],
      });
    }

    return { success: true, message: 'Seeded successfully' };
  }

  /*
  create(data: any) {
    return this.prisma.activity.create({ data });
  }
  */
}
