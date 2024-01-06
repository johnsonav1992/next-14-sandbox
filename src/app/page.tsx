import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { sql } from '@vercel/postgres';

type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
};

const Home = async () => {
    const res = await fetch( 'https://jsonplaceholder.typicode.com/todos/' );
    const data: Todo[] = await res.json();

    const { rows } = await sql`SELECT * FROM todos`;

    console.log( rows );

    return (
        <>
            <Button>
                Click Me
            </Button>
            <h1>Todos</h1>
            <Card className='flex flex-wrap w-1/2 gap-2 justify-center p-5 m-4'>
                {
                    data?.map( todo => {
                        return (
                            <Card
                                key={ todo.id }
                                className='w-44 bg-slate-700 text-white p-2'
                            >
                                { todo.title }
                            </Card>
                        );
                    } )
                }
            </Card>
        </>
    );
};

export default Home;
