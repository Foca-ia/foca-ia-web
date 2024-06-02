import React from "react";
import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
} from "@chakra-ui/react";

interface SearchResult {
  id: number;
  name?: string;
  title?: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  searchResults: SearchResult[];
  navigateToSearchResult: (id: number) => void;
}

const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  searchResults,
  navigateToSearchResult,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Resultados da Pesquisa</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>
            {searchResults.length > 0 ? (
              searchResults.map((result) => (
                <Box
                  key={result.id}
                  onClick={() => {
                    navigateToSearchResult(result.id);
                    onClose(); // Fecha o modal após clicar em um resultado
                  }}
                  cursor="pointer"
                  _hover={{ backgroundColor: "#F2F2F2" }}
                  borderRadius="5px"
                  padding="10px"
                  mb="10px"
                >
                  <Text color="#000000">
                    {result.name ? result.name : result.title}
                  </Text>
                </Box>
              ))
            ) : (
              <Text>Nenhum resultado encontrado.</Text>
            )}
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SearchModal;
