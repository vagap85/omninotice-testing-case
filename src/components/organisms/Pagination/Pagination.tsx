import { HStack, Button } from '@chakra-ui/react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  if (totalPages <= 1) return null;

  return (
    <HStack justify="center" mt={4}>
      <Button onClick={() => onPageChange(currentPage - 1)} isDisabled={currentPage === 1}>
        &lt;
      </Button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Button
          key={page}
          onClick={() => onPageChange(page)}
          colorScheme={currentPage === page ? 'blue' : 'gray'}
        >
          {page}
        </Button>
      ))}
      <Button onClick={() => onPageChange(currentPage + 1)} isDisabled={currentPage === totalPages}>
        &gt;
      </Button>
    </HStack>
  );
};