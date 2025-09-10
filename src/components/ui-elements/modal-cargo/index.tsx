"use client";

import { useState } from "react";
import { Button } from "../button";
import { ShowcaseSection } from "../../Layouts/showcase-section";
import InputGroup from "../../FormElements/InputGroup";

export default function ModalCargo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-white shadow-lg dark:bg-gray-800">
            <ShowcaseSection title="Novo cargo" className="space-y-5.5 !p-6.5">
              <div className="grid grid-cols-1 gap-4">
                <InputGroup
                  required
                  label="Nome do cardo"
                  placeholder="Digite o nome"
                  type="text"
                />

                <InputGroup
                  required
                  label="Descrição"
                  placeholder="Alguma descrição?"
                  type="text"
                />
              </div>

              <div className="mt-6 flex gap-4">
                <button
                  type="submit"
                  className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
                >
                  Adicionar
                </button>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                >
                  Fechar
                </button>
              </div>
            </ShowcaseSection>
          </div>
        </div>
      )}

      <Button
        label="Novo cargo"
        variant="primary"
        shape="full"
        onClick={() => setIsOpen(true)}
      />
    </>
  );
}
