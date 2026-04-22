import { NextResponse } from 'next/server';

const MOCK_SPECS = [
  {
    id: '1',
    title: 'User Management System API Spec',
    version: '1.2.0',
    status: 'PUBLISHED',
    author: 'System Admin',
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Payment Gateway Integration Specification',
    version: '0.9.5',
    status: 'REVIEW',
    author: 'David Kim',
    updatedAt: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'Mobile App Push Notification Spec',
    version: '1.0.1',
    status: 'DRAFT',
    author: 'Sarah Lee',
    updatedAt: new Date().toISOString(),
  },
  {
    id: '4',
    title: 'Inventory Management Blueprint',
    version: '2.0.0',
    status: 'PUBLISHED',
    author: 'System Admin',
    updatedAt: new Date().toISOString(),
  },
  {
    id: '5',
    title: 'AI Model Serving Protocol',
    version: '0.1.0',
    status: 'DRAFT',
    author: 'AI Team',
    updatedAt: new Date().toISOString(),
  },
];

export async function GET() {
  return NextResponse.json({
    content: MOCK_SPECS,
    totalElements: MOCK_SPECS.length,
    totalPages: 1,
  });
}
