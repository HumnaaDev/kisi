import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { CatalogService } from '../../service/catalogService';
import { Mosaic } from './index';
import '@testing-library/jest-dom'

describe('Mosaic Component', () => {
    jest.mock('../../service/catalogService', () => ({
        CatalogService: {
          getCatalog: jest.fn(),
        },
    }));

    const mockGetCatalog = jest.spyOn(CatalogService, 'getCatalog');
    mockGetCatalog.mockResolvedValueOnce([]);

  test('renders loading state', async () => {

    const { getByText } = render(<Mosaic />);
    expect(getByText('Loading ...')).toBeInTheDocument();

    await waitFor(() => {
      expect(mockGetCatalog).toHaveBeenCalledTimes(1);
    });

  });

  test('renders images and upload button', async () => {
    const mockCatalog = [
      {
        title: 'Test Title 1',
        description: 'Test Description 1',
        image: '/image1.jpg',
      },
      {
        title: 'Test Title 2',
        description: 'Test Description 2',
        image: '/image2.jpg',
      },
    ];

    const { getByText, getByAltText } = render(<Mosaic />);

    setTimeout(async () => {
        await waitFor(() => {
            expect(getByText('Connect People and spaces')).toBeInTheDocument();
            expect(getByText('Test Title 1')).toBeInTheDocument();
            expect(getByText('Test Description 1')).toBeInTheDocument();
            expect(getByAltText('/image1.jpg')).toBeInTheDocument();
            expect(getByText('Upload New Image')).toBeInTheDocument();
        });
      }, 1000);

  });

});
