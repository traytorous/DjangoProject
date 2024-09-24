import type { MetaFunction } from "@remix-run/node";

export default function Index() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <h1> Welcome to Partner engineering</h1>
        <p>
        Hello, and welcome to the Ansible Partner Engineering team! We’re excited to have you join us and we look forward to the incredible work we’ll do together.

The purpose of this doc is to provide information, resources, and some broad directions for daily activities for the Partner Engineering Team.

In this role, you will be responsible for supporting our partners as they develop and submit certified Ansible content. As a Partner Engineer you will leverage your technical skills to advise partners on the content development process, review content for high code quality, approve content for distribution, and bridge the gap between the business and technical worlds for our partners.

The Partner Engineering team also works on contributing to the ansible tool chain that is used to test and verify ansible collections. Tools such as ansible-lint or galaxy-importer are actively developed on by Partner Engineering along with the teams that own those tools.

The team also works in the Ansible community by helping administrate Ansible's upstream community platform


        </p>
      </div>
    </div>
  );
}

