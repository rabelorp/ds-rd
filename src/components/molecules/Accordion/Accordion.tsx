import React from "react";
import * as RadixAccordion from "@radix-ui/react-accordion";
import styles from "./Accordion.module.css";

export interface AccordionItem {
  value: string;
  trigger: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface AccordionProps {
  items: AccordionItem[];
  type?: "single" | "multiple";
  defaultValue?: string | string[];
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  collapsible?: boolean;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  type = "single",
  defaultValue,
  value,
  onValueChange,
  collapsible = true,
  className,
}) => {
  const rootClassName = [styles.root, className ?? ""].filter(Boolean).join(" ");

  const content = items.map((item) => (
    <RadixAccordion.Item key={item.value} value={item.value} disabled={item.disabled} className={styles.item}>
      <RadixAccordion.Header>
        <RadixAccordion.Trigger className={styles.trigger}>
          {item.trigger}
          <svg className={styles.chevron} width="14" height="9" viewBox="0 0 14 9" fill="none" aria-hidden="true">
            <path d="M1 1l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </RadixAccordion.Trigger>
      </RadixAccordion.Header>
      <RadixAccordion.Content className={styles.content}>
        <div className={styles.contentInner}>{item.content}</div>
      </RadixAccordion.Content>
    </RadixAccordion.Item>
  ));

  if (type === "multiple") {
    return (
      <RadixAccordion.Root
        type="multiple"
        className={rootClassName}
        defaultValue={defaultValue as string[] | undefined}
        value={value as string[] | undefined}
        onValueChange={onValueChange as ((v: string[]) => void) | undefined}
      >
        {content}
      </RadixAccordion.Root>
    );
  }

  return (
    <RadixAccordion.Root
      type="single"
      collapsible={collapsible}
      className={rootClassName}
      defaultValue={defaultValue as string | undefined}
      value={value as string | undefined}
      onValueChange={onValueChange as ((v: string) => void) | undefined}
    >
      {content}
    </RadixAccordion.Root>
  );
};

Accordion.displayName = "Accordion";
