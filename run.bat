cd dist

IF %1.==. GOTO NoPatternMatch

codeceptjs run --steps --verbose --grep %1
GOTO End

:NoPatternMatch
	codeceptjs run --steps --verbose
GOTO End

:End