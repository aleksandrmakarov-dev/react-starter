import { MainLayout } from "@/components/layouts/main-layout";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Flex } from "@/components/ui/flex";
import { Input } from "@/components/ui/input";

export function LandingPage() {
  return (
    <MainLayout title="Landing">
      <Container className="p-8">
        <Flex gap="sm">
          <Input placeholder="Search..." />
          <Button>Submit</Button>
        </Flex>
      </Container>
    </MainLayout>
  );
}
