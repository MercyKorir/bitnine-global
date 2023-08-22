import React from 'react';
import Button from './Button';
import {
  Container,
  UserEmail,
  UserName,
  Wrapper,
} from '@/components/UserProfileElements';
import { useSession, signOut } from 'next-auth/react';

type Props = {};

const UserProfile: React.FC<{}> = (props: Props) => {
  const { data: session }: any = useSession();
  return (
    <Container>
      <Wrapper>
        {session && (
          <>
            <UserName>{`Hello ${session?.user?.fullName}`}</UserName>
            <UserEmail>{session?.user?.email}</UserEmail>

            <Button title="Logout" onClick={signOut} />
          </>
        )}
      </Wrapper>
    </Container>
  );
};

export default UserProfile;
