import { createSignal } from 'solid-js';
import { Button } from '../../../ui-kit/atoms/Button/Button';
import { Card } from '../../../ui-kit/atoms/Card/Card';
import { Container } from '../../../ui-kit/atoms/Container/Container';
import { Checkbox } from '../../../ui-kit/atoms/inputs/Checkbox/Checkbox';
import { Radiobox } from '../../../ui-kit/atoms/inputs/Radiobox/Radiobox';
import { TextInput } from '../../../ui-kit/atoms/inputs/TextInput/TextInput';
import { Heading } from '../../../ui-kit/atoms/text/Heading/Heading';
import { Paragraph } from '../../../ui-kit/atoms/text/Paragraph/Paragraph';
import { Text } from '../../../ui-kit/atoms/text/Text/Text';
import { IconCross } from '../../../ui-kit/icons/IconCross';

export function App() {
    const [getN, setN] = createSignal(0);
    const [getText, setText] = createSignal('Hello there');
    const [checked, setChecked] = createSignal<boolean | undefined>(undefined);
    const [radio, setRadio] = createSignal(false);
    const isEven = radio;
    const isOdd = () => !radio();
    const selectEven = () => setRadio(true);
    const selectOdd = () => setRadio(false);

    return (
        <Container direction="column">
            <Card>
                <Container direction="column">
                    <div>
                        <Text color="default" tag="div">{getText()}</Text>
                        <Text color="primary" tag="div">{getText()}</Text>
                        <Text color="info" tag="div">{getText()}</Text>
                        <Text color="success" tag="div">{getText()}</Text>
                        <Text color="warn" tag="div">{getText()}</Text>
                        <Text color="error" tag="div">{getText()}</Text>
                    </div>
                </Container>
                <Container direction="column">
                    <Text dim tag="div">
                        <Text color="default" tag="div">{getText()}</Text>
                        <Text color="primary" tag="div">{getText()}</Text>
                        <Text color="info" tag="div">{getText()}</Text>
                        <Text color="success" tag="div">{getText()}</Text>
                        <Text color="warn" tag="div">{getText()}</Text>
                        <Text color="error" tag="div">{getText()}</Text>
                    </Text>
                </Container>
                <Container direction="column">
                    <Text italic tag="div">
                        <Text color="default" tag="div">{getText()}</Text>
                        <Text color="primary" tag="div">{getText()}</Text>
                        <Text color="info" tag="div">{getText()}</Text>
                        <Text color="success" tag="div">{getText()}</Text>
                        <Text color="warn" tag="div">{getText()}</Text>
                        <Text color="error" tag="div">{getText()}</Text>
                    </Text>
                </Container>
                <Container direction="column">
                    <Text light tag="div">
                        <Text color="default" tag="div">{getText()}</Text>
                        <Text color="primary" tag="div">{getText()}</Text>
                        <Text color="info" tag="div">{getText()}</Text>
                        <Text color="success" tag="div">{getText()}</Text>
                        <Text color="warn" tag="div">{getText()}</Text>
                        <Text color="error" tag="div">{getText()}</Text>
                    </Text>
                </Container>
                <Container direction="column">
                    <Text bold tag="div">
                        <Text color="default" tag="div">{getText()}</Text>
                        <Text color="primary" tag="div">{getText()}</Text>
                        <Text color="info" tag="div">{getText()}</Text>
                        <Text color="success" tag="div">{getText()}</Text>
                        <Text color="warn" tag="div">{getText()}</Text>
                        <Text color="error" tag="div">{getText()}</Text>
                    </Text>
                </Container>
                <Container direction="column">
                    <Text size="xs">{getText()}</Text>
                    <Text size="s">{getText()}</Text>
                    <Text size="m">{getText()}</Text>
                    <Text size="l">{getText()}</Text>
                    <Text size="xl">{getText()}</Text>
                </Container>
                <div>
                    <Heading level="1">Lorem ipsum H1</Heading>
                    <Heading level="2">Lorem ipsum H2</Heading>
                    <Paragraph>Lorem ipsum dolor sit amet</Paragraph>
                    <Heading level="2">Lorem ipsum H2</Heading>
                    <Heading level="3">Lorem ipsum H3</Heading>
                    <Paragraph>Lorem ipsum dolor sit amet</Paragraph>
                    <Heading level="3">Lorem ipsum H3</Heading>
                    <Paragraph>Lorem ipsum dolor sit amet</Paragraph>
                    <Heading level="4">Lorem ipsum H4</Heading>
                    <Heading level="5">Lorem ipsum H5</Heading>
                    <Heading level="6">Lorem ipsum H6</Heading>
                </div>
            </Card>
            <Container>
                <Container direction="column">
                    <TextInput value={getText()} onUpdate={setText} placeholder="Text..." size="xs" />
                    <TextInput value={getText()} onUpdate={setText} placeholder="Text..." size="s" />
                    <TextInput value={getText()} onUpdate={setText} placeholder="Text..." />
                    <TextInput value={getText()} onUpdate={setText} placeholder="Text..." size="l" />
                    <TextInput value={getText()} onUpdate={setText} placeholder="Text..." size="xl" />
                    <TextInput value={getText()} onUpdate={setText} label="I am very very long label that goes way long" />
                    <TextInput value={getText()} onUpdate={setText} label="" />
                </Container>
                <Container direction="column">
                    <TextInput value={getText()} onUpdate={setText} label="Label" size="xs" />
                    <TextInput value={getText()} onUpdate={setText} label="Label" size="s" />
                    <TextInput value={getText()} onUpdate={setText} label="Label" />
                    <TextInput value={getText()} onUpdate={setText} label="Label" size="l" />
                    <TextInput value={getText()} onUpdate={setText} label="Label" size="xl" />
                </Container>
                <Container direction="column">
                    <TextInput value={getText()} onUpdate={setText} />
                    <TextInput value={getText()} onUpdate={setText} validity="success" />
                    <TextInput value={getText()} onUpdate={setText} validity="error" />
                    <TextInput value={getText()} onUpdate={setText} disabled />
                    <TextInput value={getText()} onUpdate={setText} readonly />
                    <TextInput value={getText()} onUpdate={setText} validity="success" label="Label" />
                    <TextInput value={getText()} onUpdate={setText} validity="error" label="Label" />
                </Container>
                <Container direction="column">
                    <TextInput
                        value={getText()}
                        onUpdate={setText}
                    />
                    <TextInput
                        value={getText()}
                        onUpdate={setText}
                        before={(
                            <Button color="info" size="s">...</Button>
                        )}
                    />
                    <TextInput
                        value={getText()}
                        onUpdate={setText}
                        after={(
                            <Button color="warn" size="s">#</Button>
                        )}
                    />
                    <TextInput
                        value={getText()}
                        onUpdate={setText}
                        before={(
                            <Button color="primary" size="s">...</Button>
                        )}
                        after={(
                            <Button color="error" square size="s">!</Button>
                        )}
                    />
                    <TextInput
                        value={getText()}
                        onUpdate={setText}
                        after={(
                            <Button mode="text" square size="s">
                                <IconCross/>
                            </Button>
                        )}
                    />
                </Container>
            </Container>
            <Container wrap>
                <Button onClick={() => setN(getN() + 1)}>Default</Button>
                <Button color="primary">Primary</Button>
                <Button color="success">Success</Button>
                <Button color="info">Info</Button>
                <Button color="warn">Warn</Button>
                <Button color="error">Error</Button>

                <Button loading>Default</Button>
                <Button loading color="primary">Primary</Button>
                <Button loading color="success">Success</Button>
                <Button loading color="info">Info</Button>
                <Button loading color="warn">Warn</Button>
                <Button loading color="error">Error</Button>
            </Container>
            <Container>
                <Button mode="pale">Default</Button>
                <Button mode="pale" color="primary">Primary</Button>
                <Button mode="pale" color="success">Success</Button>
                <Button mode="pale" color="info">Info</Button>
                <Button mode="pale" color="warn">Warn</Button>
                <Button mode="pale" color="error">Error</Button>

                <Button loading mode="pale">Default</Button>
                <Button loading mode="pale" color="primary">Primary</Button>
                <Button loading mode="pale" color="success">Success</Button>
                <Button loading mode="pale" color="info">Info</Button>
                <Button loading mode="pale" color="warn">Warn</Button>
                <Button loading mode="pale" color="error">Error</Button>
            </Container>
            <Container>
                <Button mode="text">Default</Button>
                <Button mode="text" color="primary">Primary</Button>
                <Button mode="text" color="success">Success</Button>
                <Button mode="text" color="info">Info</Button>
                <Button mode="text" color="warn">Warn</Button>
                <Button mode="text" color="error">Error</Button>

                <Button loading mode="text">Default</Button>
                <Button loading mode="text" color="primary">Primary</Button>
                <Button loading mode="text" color="success">Success</Button>
                <Button loading mode="text" color="info">Info</Button>
                <Button loading mode="text" color="warn">Warn</Button>
                <Button loading mode="text" color="error">Error</Button>
            </Container>
            <Container>
                <Button disabled>Disabled</Button>
                <Button mode="pale" disabled>Disabled pale</Button>
                <Button mode="text" disabled>Disabled text</Button>
            </Container>

            <Container wrap padding="s">
                <Button size="xs">Default</Button>
                <Button size="xs" color="primary">Primary XS</Button>
                <Button size="xs" color="success">Success XS</Button>
                <Button size="xs" color="info">Info XS</Button>
                <Button size="xs" color="warn">Warn XS</Button>
                <Button size="xs" color="error">Error XS</Button>
            </Container>
            <Container wrap padding="s">
                <Button size="s">Default S</Button>
                <Button size="s" color="primary">Primary S</Button>
                <Button size="s" color="success">Success S</Button>
                <Button size="s" color="info">Info S</Button>
                <Button size="s" color="warn">Warn S</Button>
                <Button size="s" color="error">Error S</Button>
            </Container>
            <Container wrap padding="s">
                <Button size="m">Default M</Button>
                <Button size="m" color="primary">Primary M</Button>
                <Button size="m" color="success">Success M</Button>
                <Button size="m" color="info">Info M</Button>
                <Button size="m" color="warn">Warn M</Button>
                <Button size="m" color="error">Error M</Button>
            </Container>
            <Container wrap padding="s">
                <Button size="l">Default L</Button>
                <Button size="l" color="primary">Primary L</Button>
                <Button size="l" color="success">Success L</Button>
                <Button size="l" color="info">Info L</Button>
                <Button size="l" color="warn">Warn L</Button>
                <Button size="l" color="error">Error L</Button>
            </Container>
            <Container wrap padding="s">
                <Button size="xl">Default XL</Button>
                <Button size="xl" color="primary">Primary XL</Button>
                <Button size="xl" color="success">Success XL</Button>
                <Button size="xl" color="info">Info XL</Button>
                <Button size="xl" color="warn">Warn XL</Button>
                <Button size="xl" color="error">Error XL</Button>
            </Container>
            <Container>
                <Checkbox value={checked()} onUpdate={setChecked} size="xs" color="default"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="xs" color="primary"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="xs" color="info"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="xs" color="success"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="xs" color="warn"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="xs" color="error"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="xs" disabled/>
            </Container>
            <Container>
                <Checkbox value={checked()} onUpdate={setChecked} size="s" color="default"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="s" color="primary"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="s" color="info"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="s" color="success"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="s" color="warn"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="s" color="error"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="s" disabled/>
            </Container>
            <Container>
                <Checkbox value={checked()} onUpdate={setChecked} size="m" color="default"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="m" color="primary"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="m" color="info"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="m" color="success"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="m" color="warn"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="m" color="error"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="m" disabled/>
            </Container>
            <Container>
                <Checkbox value={checked()} onUpdate={setChecked} size="l" color="default"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="l" color="primary"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="l" color="info"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="l" color="success"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="l" color="warn"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="l" color="error"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="l" disabled/>
            </Container>
            <Container>
                <Checkbox value={checked()} onUpdate={setChecked} size="xl" color="default"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="xl" color="primary"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="xl" color="info"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="xl" color="success"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="xl" color="warn"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="xl" color="error"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="xl" disabled/>
            </Container>

            <Container>
                <Radiobox value={isEven()} onChecked={selectEven} size="xs" color="default"/>
                <Radiobox value={isOdd()} onChecked={selectOdd} size="xs" color="primary"/>
                <Radiobox value={isEven()} onChecked={selectEven} size="xs" color="info"/>
                <Radiobox value={isOdd()} onChecked={selectOdd} size="xs" color="success"/>
                <Radiobox value={isEven()} onChecked={selectEven} size="xs" color="warn"/>
                <Radiobox value={isOdd()} onChecked={selectOdd} size="xs" color="error"/>
                <Radiobox value={isEven()} onChecked={selectEven} size="xs" disabled/>
            </Container>
            <Container>
                <Radiobox value={isEven()} onChecked={selectEven} size="s" color="default"/>
                <Radiobox value={isOdd()} onChecked={selectOdd} size="s" color="primary"/>
                <Radiobox value={isEven()} onChecked={selectEven} size="s" color="info"/>
                <Radiobox value={isOdd()} onChecked={selectOdd} size="s" color="success"/>
                <Radiobox value={isEven()} onChecked={selectEven} size="s" color="warn"/>
                <Radiobox value={isOdd()} onChecked={selectOdd} size="s" color="error"/>
                <Radiobox value={isEven()} onChecked={selectEven} size="s" disabled/>
            </Container>
            <Container>
                <Radiobox value={isEven()} onChecked={selectEven} size="m" color="default"/>
                <Radiobox value={isOdd()} onChecked={selectOdd} size="m" color="primary"/>
                <Radiobox value={isEven()} onChecked={selectEven} size="m" color="info"/>
                <Radiobox value={isOdd()} onChecked={selectOdd} size="m" color="success"/>
                <Radiobox value={isEven()} onChecked={selectEven} size="m" color="warn"/>
                <Radiobox value={isOdd()} onChecked={selectOdd} size="m" color="error"/>
                <Radiobox value={isEven()} onChecked={selectEven} size="m" disabled/>
            </Container>
            <Container>
                <Radiobox value={isEven()} onChecked={selectEven} size="l" color="default"/>
                <Radiobox value={isOdd()} onChecked={selectOdd} size="l" color="primary"/>
                <Radiobox value={isEven()} onChecked={selectEven} size="l" color="info"/>
                <Radiobox value={isOdd()} onChecked={selectOdd} size="l" color="success"/>
                <Radiobox value={isEven()} onChecked={selectEven} size="l" color="warn"/>
                <Radiobox value={isOdd()} onChecked={selectOdd} size="l" color="error"/>
                <Radiobox value={isEven()} onChecked={selectEven} size="l" disabled/>
            </Container>
            <Container>
                <Radiobox value={isEven()} onChecked={selectEven} size="xl" color="default"/>
                <Radiobox value={isOdd()} onChecked={selectOdd} size="xl" color="primary"/>
                <Radiobox value={isEven()} onChecked={selectEven} size="xl" color="info"/>
                <Radiobox value={isOdd()} onChecked={selectOdd} size="xl" color="success"/>
                <Radiobox value={isEven()} onChecked={selectEven} size="xl" color="warn"/>
                <Radiobox value={isOdd()} onChecked={selectOdd} size="xl" color="error"/>
                <Radiobox value={isEven()} onChecked={selectEven} size="xl" disabled/>
            </Container>
        </Container>
    );
}
