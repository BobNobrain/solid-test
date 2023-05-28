import { createSignal } from 'solid-js';
import { Button } from '../../../ui-kit/components/Button/Button';
import { container } from '../../../ui-kit/atoms/container/container';
import { Checkbox } from '../../../ui-kit/components/inputs/Checkbox/Checkbox';
import { Radiobox } from '../../../ui-kit/components/inputs/Radiobox/Radiobox';
import { TextInput } from '../../../ui-kit/components/inputs/TextInput/TextInput';
import { Link } from '../../../ui-kit/components/Link/Link';
import { Heading } from '../../../ui-kit/components/text/Heading/Heading';
import { Paragraph } from '../../../ui-kit/components/text/Paragraph/Paragraph';
import { Text } from '../../../ui-kit/components/text/Text/Text';
import { IconCross } from '../../../ui-kit/icons/IconCross';
import { card } from '../../../ui-kit/atoms/card/card';

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
        <div classList={container({ direction: 'column' })}>
            <div classList={card({})}>
                <div classList={container({ direction: 'column' })}>
                    <div>
                        <Text color="default" tag="div">{getText()}</Text>
                        <Text color="primary" tag="div">{getText()}</Text>
                        <Text color="info" tag="div">{getText()}</Text>
                        <Text color="success" tag="div">{getText()}</Text>
                        <Text color="warn" tag="div">{getText()}</Text>
                        <Text color="error" tag="div">{getText()}</Text>
                    </div>
                </div>
                <div classList={container({ direction: 'column' })}>
                    <Text dim tag="div">
                        <Text color="default" tag="div">{getText()}</Text>
                        <Text color="primary" tag="div">{getText()}</Text>
                        <Text color="info" tag="div">{getText()}</Text>
                        <Text color="success" tag="div">{getText()}</Text>
                        <Text color="warn" tag="div">{getText()}</Text>
                        <Text color="error" tag="div">{getText()}</Text>
                    </Text>
                </div>
                <div classList={container({ direction: 'column' })}>
                    <Text italic tag="div">
                        <Text color="default" tag="div">{getText()}</Text>
                        <Text color="primary" tag="div">{getText()}</Text>
                        <Text color="info" tag="div">{getText()}</Text>
                        <Text color="success" tag="div">{getText()}</Text>
                        <Text color="warn" tag="div">{getText()}</Text>
                        <Text color="error" tag="div">{getText()}</Text>
                    </Text>
                </div>
                <div classList={container({ direction: 'column' })}>
                    <Text light tag="div">
                        <Text color="default" tag="div">{getText()}</Text>
                        <Text color="primary" tag="div">{getText()}</Text>
                        <Text color="info" tag="div">{getText()}</Text>
                        <Text color="success" tag="div">{getText()}</Text>
                        <Text color="warn" tag="div">{getText()}</Text>
                        <Text color="error" tag="div">{getText()}</Text>
                    </Text>
                </div>
                <div classList={container({ direction: 'column' })}>
                    <Text bold tag="div">
                        <Text color="default" tag="div">{getText()}</Text>
                        <Text color="primary" tag="div">{getText()}</Text>
                        <Text color="info" tag="div">{getText()}</Text>
                        <Text color="success" tag="div">{getText()}</Text>
                        <Text color="warn" tag="div">{getText()}</Text>
                        <Text color="error" tag="div">{getText()}</Text>
                    </Text>
                </div>
                <div classList={container({ direction: 'column' })}>
                    <Text size="xs">{getText()}</Text>
                    <Text size="s">{getText()}</Text>
                    <Text size="m">{getText()}</Text>
                    <Text size="l">{getText()}</Text>
                    <Text size="xl">{getText()}</Text>
                </div>
                <div>
                    <Heading level="1">Lorem ipsum H1</Heading>
                    <Heading level="2">Lorem ipsum H2</Heading>
                    <Paragraph>Lorem ipsum dolor sit amet</Paragraph>
                    <Heading level="2">Lorem ipsum H2</Heading>
                    <Heading level="3">Lorem ipsum H3</Heading>
                    <Paragraph>Lorem ipsum dolor sit amet</Paragraph>
                    <Heading level="3">Lorem ipsum H3</Heading>
                    <Paragraph>
                        Lorem ipsum dolor sit amet
                        <Link href="http://example.com" target="_blank">Go!</Link>
                    </Paragraph>
                    <Heading level="4">Lorem ipsum H4</Heading>
                    <Heading level="5">Lorem ipsum H5</Heading>
                    <Heading level="6">Lorem ipsum H6</Heading>
                </div>
            </div>
            <div classList={container({})}>
                <div classList={container({ direction: 'column' })}>
                    <TextInput value={getText()} onUpdate={setText} placeholder="Text..." outerSize="xs" />
                    <TextInput value={getText()} onUpdate={setText} placeholder="Text..." outerSize="s" />
                    <TextInput value={getText()} onUpdate={setText} placeholder="Text..." />
                    <TextInput value={getText()} onUpdate={setText} placeholder="Text..." outerSize="l" />
                    <TextInput value={getText()} onUpdate={setText} placeholder="Text..." outerSize="xl" />
                    <TextInput
                        value={getText()}
                        onUpdate={setText}
                        label="I am very very long label that goes way long"
                    />
                    <TextInput value={getText()} onUpdate={setText} label="" />
                </div>
                <div classList={container({ direction: 'column' })}>
                    <TextInput value={getText()} onUpdate={setText} label="Label" outerSize="xs" />
                    <TextInput value={getText()} onUpdate={setText} label="Label" outerSize="s" />
                    <TextInput value={getText()} onUpdate={setText} label="Label" />
                    <TextInput value={getText()} onUpdate={setText} label="Label" outerSize="l" />
                    <TextInput value={getText()} onUpdate={setText} label="Label" outerSize="xl" />
                </div>
                <div classList={container({ direction: 'column' })}>
                    <TextInput value={getText()} onUpdate={setText} />
                    <TextInput value={getText()} onUpdate={setText} validity="success" />
                    <TextInput value={getText()} onUpdate={setText} validity="error" />
                    <TextInput value={getText()} onUpdate={setText} disabled />
                    <TextInput value={getText()} onUpdate={setText} readonly />
                    <TextInput value={getText()} onUpdate={setText} validity="success" label="Label" />
                    <TextInput value={getText()} onUpdate={setText} validity="error" label="Label" />
                </div>
                <div classList={container({ direction: 'column' })}>
                    <TextInput
                        value={getText()}
                        onUpdate={setText}
                    />
                    <TextInput
                        value={getText()}
                        onUpdate={setText}
                        before={(
                            <Button color="info" outerSize="s">...</Button>
                        )}
                    />
                    <TextInput
                        value={getText()}
                        onUpdate={setText}
                        after={(
                            <Button color="warn" outerSize="s">#</Button>
                        )}
                    />
                    <TextInput
                        value={getText()}
                        onUpdate={setText}
                        before={(
                            <Button color="primary" outerSize="s">...</Button>
                        )}
                        after={(
                            <Button color="error" square outerSize="s">!</Button>
                        )}
                    />
                    <TextInput
                        value={getText()}
                        onUpdate={setText}
                        after={(
                            <Button mode="text" square outerSize="s">
                                <IconCross/>
                            </Button>
                        )}
                    />
                </div>
            </div>
            <div classList={container({ wrap: true })}>
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
            </div>
            <div classList={container({})}>
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
            </div>
            <div classList={container({})}>
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
            </div>
            <div>
                <Button disabled color="primary">Disabled</Button>
                <Button mode="pale" disabled>Disabled pale</Button>
                <Button mode="text" disabled>Disabled text</Button>
            </div>

            <div classList={container({ wrap: true, padding: 's' })}>
                <Button outerSize="xs">Default</Button>
                <Button outerSize="xs" color="primary">Primary XS</Button>
                <Button outerSize="xs" color="success">Success XS</Button>
                <Button outerSize="xs" color="info">Info XS</Button>
                <Button outerSize="xs" color="warn">Warn XS</Button>
                <Button outerSize="xs" color="error">Error XS</Button>
            </div>
            <div classList={container({ wrap: true, padding: 's' })}>
                <Button outerSize="s">Default S</Button>
                <Button outerSize="s" color="primary">Primary S</Button>
                <Button outerSize="s" color="success">Success S</Button>
                <Button outerSize="s" color="info">Info S</Button>
                <Button outerSize="s" color="warn">Warn S</Button>
                <Button outerSize="s" color="error">Error S</Button>
            </div>
            <div classList={container({ wrap: true, padding: 's' })}>
                <Button outerSize="m">Default M</Button>
                <Button outerSize="m" color="primary">Primary M</Button>
                <Button outerSize="m" color="success">Success M</Button>
                <Button outerSize="m" color="info">Info M</Button>
                <Button outerSize="m" color="warn">Warn M</Button>
                <Button outerSize="m" color="error">Error M</Button>
            </div>
            <div classList={container({ wrap: true, padding: 's' })}>
                <Button outerSize="l">Default L</Button>
                <Button outerSize="l" color="primary">Primary L</Button>
                <Button outerSize="l" color="success">Success L</Button>
                <Button outerSize="l" color="info">Info L</Button>
                <Button outerSize="l" color="warn">Warn L</Button>
                <Button outerSize="l" color="error">Error L</Button>
            </div>
            <div classList={container({ wrap: true, padding: 's' })}>
                <Button outerSize="xl">Default XL</Button>
                <Button outerSize="xl" color="primary">Primary XL</Button>
                <Button outerSize="xl" color="success">Success XL</Button>
                <Button outerSize="xl" color="info">Info XL</Button>
                <Button outerSize="xl" color="warn">Warn XL</Button>
                <Button outerSize="xl" color="error">Error XL</Button>
            </div>
            <div classList={container({})}>
                <Checkbox value={checked()} onUpdate={setChecked} size="xs" color="default"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="xs" color="primary"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="xs" color="info"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="xs" color="success"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="xs" color="warn"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="xs" color="error"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="xs" disabled/>
            </div>
            <div classList={container({})}>
                <Checkbox value={checked()} onUpdate={setChecked} size="s" color="default"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="s" color="primary"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="s" color="info"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="s" color="success"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="s" color="warn"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="s" color="error"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="s" disabled/>
            </div>
            <div classList={container({})}>
                <Checkbox value={checked()} onUpdate={setChecked} size="m" color="default"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="m" color="primary"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="m" color="info"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="m" color="success"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="m" color="warn"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="m" color="error"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="m" disabled/>
            </div>
            <div classList={container({})}>
                <Checkbox value={checked()} onUpdate={setChecked} size="l" color="default"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="l" color="primary"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="l" color="info"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="l" color="success"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="l" color="warn"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="l" color="error"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="l" disabled/>
            </div>
            <div classList={container({})}>
                <Checkbox value={checked()} onUpdate={setChecked} size="xl" color="default"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="xl" color="primary"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="xl" color="info"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="xl" color="success"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="xl" color="warn"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="xl" color="error"/>
                <Checkbox value={checked()} onUpdate={setChecked} size="xl" disabled/>
            </div>

            <div classList={container({})}>
                <Radiobox value={isEven()} onChecked={selectEven} size="xs" color="default"/>
                <Radiobox value={isOdd()} onChecked={selectOdd} size="xs" color="primary"/>
                <Radiobox value={isEven()} onChecked={selectEven} size="xs" color="info"/>
                <Radiobox value={isOdd()} onChecked={selectOdd} size="xs" color="success"/>
                <Radiobox value={isEven()} onChecked={selectEven} size="xs" color="warn"/>
                <Radiobox value={isOdd()} onChecked={selectOdd} size="xs" color="error"/>
                <Radiobox value={isEven()} onChecked={selectEven} size="xs" disabled/>
            </div>
            <div classList={container({})}>
                <Radiobox value={isEven()} onChecked={selectEven} size="s" color="default"/>
                <Radiobox value={isOdd()} onChecked={selectOdd} size="s" color="primary"/>
                <Radiobox value={isEven()} onChecked={selectEven} size="s" color="info"/>
                <Radiobox value={isOdd()} onChecked={selectOdd} size="s" color="success"/>
                <Radiobox value={isEven()} onChecked={selectEven} size="s" color="warn"/>
                <Radiobox value={isOdd()} onChecked={selectOdd} size="s" color="error"/>
                <Radiobox value={isEven()} onChecked={selectEven} size="s" disabled/>
            </div>
            <div classList={container({})}>
                <Radiobox value={isEven()} onChecked={selectEven} size="m" color="default"/>
                <Radiobox value={isOdd()} onChecked={selectOdd} size="m" color="primary"/>
                <Radiobox value={isEven()} onChecked={selectEven} size="m" color="info"/>
                <Radiobox value={isOdd()} onChecked={selectOdd} size="m" color="success"/>
                <Radiobox value={isEven()} onChecked={selectEven} size="m" color="warn"/>
                <Radiobox value={isOdd()} onChecked={selectOdd} size="m" color="error"/>
                <Radiobox value={isEven()} onChecked={selectEven} size="m" disabled/>
            </div>
            <div classList={container({})}>
                <Radiobox value={isEven()} onChecked={selectEven} size="l" color="default"/>
                <Radiobox value={isOdd()} onChecked={selectOdd} size="l" color="primary"/>
                <Radiobox value={isEven()} onChecked={selectEven} size="l" color="info"/>
                <Radiobox value={isOdd()} onChecked={selectOdd} size="l" color="success"/>
                <Radiobox value={isEven()} onChecked={selectEven} size="l" color="warn"/>
                <Radiobox value={isOdd()} onChecked={selectOdd} size="l" color="error"/>
                <Radiobox value={isEven()} onChecked={selectEven} size="l" disabled/>
            </div>
            <div classList={container({})}>
                <Radiobox value={isEven()} onChecked={selectEven} size="xl" color="default"/>
                <Radiobox value={isOdd()} onChecked={selectOdd} size="xl" color="primary"/>
                <Radiobox value={isEven()} onChecked={selectEven} size="xl" color="info"/>
                <Radiobox value={isOdd()} onChecked={selectOdd} size="xl" color="success"/>
                <Radiobox value={isEven()} onChecked={selectEven} size="xl" color="warn"/>
                <Radiobox value={isOdd()} onChecked={selectOdd} size="xl" color="error"/>
                <Radiobox value={isEven()} onChecked={selectEven} size="xl" disabled/>
            </div>
        </div>
    );
}
