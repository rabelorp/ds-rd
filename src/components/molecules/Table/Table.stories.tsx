import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "./Table";
import React from "react";

const meta: Meta<typeof Table> = { title: "Molecules/Table", component: Table, tags: ["autodocs"] };
export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: () => (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Cell as="th" scope="col">Nome</Table.Cell>
          <Table.Cell as="th" scope="col">Email</Table.Cell>
          <Table.Cell as="th" scope="col">Status</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>João Silva</Table.Cell>
          <Table.Cell>joao@rabelodigital.com</Table.Cell>
          <Table.Cell>Ativo</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};

export const WithManyRows: Story = {
  render: () => (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Cell as="th" scope="col">#</Table.Cell>
          <Table.Cell as="th" scope="col">Nome</Table.Cell>
          <Table.Cell as="th" scope="col">Valor</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {Array.from({ length: 10 }, (_, i) => (
          <Table.Row key={i}>
            <Table.Cell>{i + 1}</Table.Cell>
            <Table.Cell>Item {i + 1}</Table.Cell>
            <Table.Cell>R$ {((i + 1) * 99.9).toFixed(2)}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  ),
};

export const DarkMode: Story = {
  render: () => (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Cell as="th" scope="col">Coluna</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row><Table.Cell>Valor</Table.Cell></Table.Row>
      </Table.Body>
    </Table>
  ),
  parameters: { backgrounds: { default: "dark" } },
};
