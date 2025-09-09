"use client";

import { useState } from "react";
import { Button } from "../button";
import { ShowcaseSection } from "../../Layouts/showcase-section";
import InputGroup from "../../FormElements/InputGroup";
import DatePickerOne from "../../FormElements/DatePicker/DatePickerOne";
import { Select } from "../../FormElements/select";

export default function ModalFuncionarios() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-3xl rounded-2xl bg-white shadow-lg dark:bg-gray-800">
            <ShowcaseSection
              title="Novo funcionário"
              className="space-y-5.5 !p-6.5"
            >
              <div className="grid grid-cols-2 gap-4">
                <InputGroup
                  required
                  label="Nome do funcionário"
                  placeholder="Digite o nome"
                  type="text"
                />

                <InputGroup
                  required
                  label="Cargo"
                  placeholder="Digite o cargo"
                  type="text"
                />

                <InputGroup
                  required
                  label="RG"
                  placeholder="Digite o RG"
                  type="text"
                  onInput={(e: React.FormEvent<HTMLInputElement>) => {
                    let value = e.currentTarget.value.replace(/\D/g, ""); // só números
                    value = value.replace(/(\d{2})(\d)/, "$1.$2");
                    value = value.replace(/(\d{3})(\d)/, "$1.$2");
                    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
                    e.currentTarget.value = value;
                  }}
                />

                <DatePickerOne label="Data de nascimento" />

                <Select
                  label="Status"
                  items={[
                    { label: "Ativo", value: "Ativo" },
                    { label: "Desativo", value: "Desativo" },
                    { label: "Excluido", value: "Excluido" },
                  ]}
                  defaultValue="Ativo"
                />

                <InputGroup
                  required
                  label="Email"
                  placeholder="Digite o email"
                  type="text"
                />

                <InputGroup
                  required
                  label="Telefone"
                  placeholder="Digite o Telefone"
                  type="text"
                  onInput={(e: React.FormEvent<HTMLInputElement>) => {
                    let value = e.currentTarget.value.replace(/\D/g, "");
                    value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
                    value = value.replace(/(\d{5})(\d)/, "$1-$2");
                    e.currentTarget.value = value;
                  }}
                />

                <InputGroup
                  required
                  label="Endereço"
                  placeholder="Digite o endereço"
                  type="text"
                />

                <InputGroup
                  required
                  label="Username"
                  placeholder="Digite o username"
                  type="text"
                />

                <InputGroup
                  required
                  label="Password"
                  placeholder="Digite o password"
                  type="password"
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
        label="Novo funcionário"
        variant="primary"
        shape="full"
        onClick={() => setIsOpen(true)}
      />
    </>
  );
}
