import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function Contact() {
  return (
    <>
      <section className="p-10 flex flex-col justify-center items-center space-y-4">
        <h2 className="text-3xl font-semibold">Contacter-nous</h2>
        <Card className="bg-white p-5 border-none">
          <form className="min-w-96  p-5 rounded-lg space-y-4">
            <div>
              <Label htmlFor="name" className="mb-2">
                Nom
              </Label>
              <Input type="text" id="name" name="name" required />
            </div>

            <div>
              <Label htmlFor="name" className="mb-2">
                Nom
              </Label>
              <Input type="text" id="name" name="name" required />
            </div>

            <div>
              <Label htmlFor="name" className="mb-2">
                Nom
              </Label>
              <Input type="text" id="name" name="name" required />
            </div>

            <div>
              <Label htmlFor="name" className="mb-2">
                Nom
              </Label>
              <Input type="text" id="name" name="name" required />
            </div>
            <div>
              <Button
                type="submit"
                className="w-full text-lg border border-[#242943]"
              >
                Envoyer
              </Button>
            </div>
          </form>
        </Card>
      </section>
    </>
  );
}
